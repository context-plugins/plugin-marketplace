from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EncryptionType(str, Enum):
    """A value that specifies the type of server-side encryption that the file share will use for the data that it
    stores in Amazon S3. We recommend using EncryptionType instead of KMSEncrypted to set the file share encryption
    method. You do not need to provide values for both parameters. If values for both parameters exist in the same
    request, then the specified encryption methods must not conflict. For example, if EncryptionType is SseS3, then
    KMSEncrypted must be false. If EncryptionType is SseKms or DsseKms, then KMSEncrypted must be true."""

    SSE_S3 = "SseS3"
    SSE_KMS = "SseKms"
    DSSE_KMS = "DsseKms"

    __str__ = str.__str__


EncryptionTypeOrStr: TypeAlias = Annotated[EncryptionType | str, open_enum_validator(EncryptionType)]
