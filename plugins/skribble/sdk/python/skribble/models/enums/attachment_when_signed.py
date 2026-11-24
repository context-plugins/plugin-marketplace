from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AttachmentWhenSigned(str, Enum):
    SIGNED_DOCUMENT = "SIGNED_DOCUMENT"
    SIGNATURE_PROTOCOL = "SIGNATURE_PROTOCOL"

    __str__ = str.__str__


AttachmentWhenSignedOrStr: TypeAlias = Annotated[AttachmentWhenSigned | str, open_enum_validator(AttachmentWhenSigned)]
