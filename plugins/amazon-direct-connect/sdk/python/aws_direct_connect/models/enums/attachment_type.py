from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AttachmentType(str, Enum):
    """The type of attachment."""

    TRANSIT_VIRTUAL_INTERFACE = "TransitVirtualInterface"
    PRIVATE_VIRTUAL_INTERFACE = "PrivateVirtualInterface"

    __str__ = str.__str__


AttachmentTypeOrStr: TypeAlias = Annotated[AttachmentType | str, open_enum_validator(AttachmentType)]
