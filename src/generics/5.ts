enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleDescription = Record<UserRole, string>;

const RoleDescription: UserRoleDescription = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

export {};
