from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SignatureStatusCodeSkribbleSignatureAttachmentApi(str, Enum):
    """The state of a signature.

    Possible values:
      - **OPEN** Waiting for the user to sign a signature.
      - **WAITING** The signer is waiting for a preceding signer in the sequence to complete.
      - **DECLINED** The user declined to sign.
      - **WITHDRAWN** The owner has withdrawn the signature request.
      - **SIGNED** The user signed the document.
      - **ERROR** A technical error occurred."""

    OPEN = "OPEN"
    WAITING = "WAITING"
    DECLINED = "DECLINED"
    WITHDRAWN = "WITHDRAWN"
    SIGNED = "SIGNED"
    ERROR = "ERROR"

    __str__ = str.__str__


SignatureStatusCodeSkribbleSignatureAttachmentApiOrStr: TypeAlias = Annotated[
    SignatureStatusCodeSkribbleSignatureAttachmentApi | str,
    open_enum_validator(SignatureStatusCodeSkribbleSignatureAttachmentApi),
]
