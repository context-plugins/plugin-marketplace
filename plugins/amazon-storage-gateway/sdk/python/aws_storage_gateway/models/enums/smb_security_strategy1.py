from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SmbSecurityStrategy1(str, Enum):
    """Specifies the type of security strategy. ClientSpecified: If you choose this option, requests are established
    based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across
    different clients in your environment. Supported only for S3 File Gateway. MandatorySigning: If you choose this
    option, File Gateway only allows connections from SMBv2 or SMBv3 clients that have signing enabled. This option
    works with SMB clients on Microsoft Windows Vista, Windows Server 2008 or newer. MandatoryEncryption: If you choose
    this option, File Gateway only al"""

    CLIENT_SPECIFIED = "ClientSpecified"
    MANDATORY_SIGNING = "MandatorySigning"
    MANDATORY_ENCRYPTION = "MandatoryEncryption"
    MANDATORY_ENCRYPTION_NO_AES128 = "MandatoryEncryptionNoAes128"

    __str__ = str.__str__


SmbSecurityStrategy1OrStr: TypeAlias = Annotated[SmbSecurityStrategy1 | str, open_enum_validator(SmbSecurityStrategy1)]
