from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SignatureQuality(str, Enum):
    """Minimal quality of the signatures for this signature request.

    | Quality | Description |
    | --- | --- |
    | **QES** | Every signer must use QES. This is the **default** quality. Requires a ``legislation`` parameter. |
    | **AES_MINIMAL** | Signers will use QES if available, otherwise AES. At least AES is guaranteed. Requires a
        ``legislation`` parameter. |
    | **AES** | Every signer uses AES. |
    | **SES** | Every signer uses SES. |
    | **DEMO** | Every signer uses a DEMO signature with **no legal binding**. API demo users (``api_demo_example_*``)
        get this quality by default. |
    | **PART11** | Signers use a signature compliant with 21 CFR Part 11 regulations. |"""

    SES = "SES"
    AES = "AES"
    AES_MINIMAL = "AES_MINIMAL"
    QES = "QES"
    DEMO = "DEMO"
    PART11 = "PART11"

    __str__ = str.__str__


SignatureQualityOrStr: TypeAlias = Annotated[SignatureQuality | str, open_enum_validator(SignatureQuality)]
