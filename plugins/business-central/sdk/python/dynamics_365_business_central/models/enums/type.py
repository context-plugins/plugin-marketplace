from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Type of operation"""

    CREATE = "create"
    COPY = "copy"
    DELETE = "delete"
    SOFT_DELETE = "softDelete"
    RECOVER = "recover"
    ENVIRONMENT_RENAME = "environmentRename"
    PIT_RESTORE = "pitRestore"
    ENVIRONMENT_APP_INSTALL = "environmentAppInstall"
    ENVIRONMENT_APP_UNINSTALL = "environmentAppUninstall"
    ENVIRONMENT_APP_UPDATE = "environmentAppUpdate"
    ENVIRONMENT_APP_HOTFIX = "environmentAppHotfix"
    MODIFY = "modify"
    UPDATE = "update"
    RESTART = "restart"
    MOVE_TO_ANOTHER_AAD_TENANT = "moveToAnotherAadTenant"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
