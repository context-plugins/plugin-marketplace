from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SignatureQuality2(str, Enum):
    """The actual quality of this signer's signature. Only present after signing."""

    SES = "SES"
    AES = "AES"
    AES_MINIMAL = "AES_MINIMAL"
    QES = "QES"
    DEMO = "DEMO"
    PART11 = "PART11"

    __str__ = str.__str__


SignatureQuality2OrStr: TypeAlias = Annotated[SignatureQuality2 | str, open_enum_validator(SignatureQuality2)]
