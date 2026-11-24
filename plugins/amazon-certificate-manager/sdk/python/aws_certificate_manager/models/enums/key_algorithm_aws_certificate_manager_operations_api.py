from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KeyAlgorithmAwsCertificateManagerOperationsApi(str, Enum):
    """Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. RSA is the
    default key algorithm for ACM certificates. Elliptic Curve Digital Signature Algorithm (ECDSA) keys are smaller,
    offering security comparable to RSA keys but with greater computing efficiency. However, ECDSA is not supported by
    all network clients. Some Amazon Web Services services may require RSA keys, or only support ECDSA keys of a
    particular size, while others allow the use of either RSA and ECDSA keys to ensure that compatibility is not broken.
    Check the requirements for the A"""

    RSA_1024 = "RSA_1024"
    RSA_2048 = "RSA_2048"
    RSA_3072 = "RSA_3072"
    RSA_4096 = "RSA_4096"
    EC_PRIME256V1 = "EC_prime256v1"
    EC_SECP384R1 = "EC_secp384r1"
    EC_SECP521R1 = "EC_secp521r1"

    __str__ = str.__str__


KeyAlgorithmAwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    KeyAlgorithmAwsCertificateManagerOperationsApi | str,
    open_enum_validator(KeyAlgorithmAwsCertificateManagerOperationsApi),
]
