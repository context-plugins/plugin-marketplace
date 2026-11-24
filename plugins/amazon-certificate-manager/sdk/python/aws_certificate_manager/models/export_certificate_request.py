from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExportCertificateRequest(SdkBaseModel):
    certificate_arn: str = Field(alias="CertificateArn")
    """An Amazon Resource Name (ARN) of the issued certificate. This must be of the form:
    arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012"""

    passphrase: str = Field(alias="Passphrase")
    """Passphrase to associate with the encrypted exported private key. When creating your passphrase, you can use any
    ASCII character except #, $, or %. If you want to later decrypt the private key, you must have the passphrase. You
    can use the following OpenSSL command to decrypt a private key. After entering the command, you are prompted for the
    passphrase. openssl rsa -in encrypted_key.pem -out decrypted_key.pem"""


class ExportCertificateRequestDict(TypedDict):
    certificate_arn: str
    passphrase: str
