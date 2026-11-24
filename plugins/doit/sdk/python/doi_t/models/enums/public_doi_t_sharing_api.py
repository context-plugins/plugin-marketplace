from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicDoiTSharingApi(str, Enum):
    """Type of permissions users in the entire organization have for this resource"""

    EDITOR = "editor"
    VIEWER = "viewer"

    __str__ = str.__str__


PublicDoiTSharingApiOrStr: TypeAlias = Annotated[PublicDoiTSharingApi | str, open_enum_validator(PublicDoiTSharingApi)]
