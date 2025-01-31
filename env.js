import "dotenv/config";

const {
  PORT,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PORT,
  ADMIN_FIRST_NAME,
  ADMIN_LAST_NAME,
  ADMIN_EMAIL,
  ADMIN_CELPHONE,
  ADMIN_PASSWORD,
} = process.env;

export {
  PORT,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PORT,
  ADMIN_FIRST_NAME,
  ADMIN_LAST_NAME,
  ADMIN_EMAIL,
  ADMIN_CELPHONE,
  ADMIN_PASSWORD,
};
