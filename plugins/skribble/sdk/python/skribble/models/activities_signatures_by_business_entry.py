from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .activities_signatures_user import ActivitiesSignaturesUser, ActivitiesSignaturesUserDict
from .enums.signature_legislation import SignatureLegislationOrStr
from .enums.signature_quality import SignatureQualityOrStr


class ActivitiesSignaturesByBusinessEntry(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="_id")
    action: Optional[str] = UNSET
    """Action performed on the signature request"""

    timestamp: Optional[RFC3339DateTime] = UNSET
    signature_request_id: Optional[str] = UNSET
    """ID of the related signature request"""

    cost_center: OptionalNullable[str] = UNSET
    """Optional cost center"""

    initiator: Optional[ActivitiesSignaturesUser] = UNSET
    signer: Optional[ActivitiesSignaturesUser] = UNSET
    quality: Optional[SignatureQualityOrStr] = UNSET
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

    legislation: Optional[SignatureLegislationOrStr] = UNSET
    """Legislation under which the signatures are created. Required when ``quality`` is ``QES`` or ``AES_MINIMAL``.

    | Legislation | Description |
    | --- | --- |
    | **ZERTES** | QES according to Swiss law. This is the **default**. |
    | **EIDAS** | QES according to EU law. |"""


class ActivitiesSignaturesByBusinessEntryDict(TypedDict):
    id: NotRequired[str]
    action: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
    signature_request_id: NotRequired[str]
    cost_center: NotRequired[str | None]
    initiator: NotRequired[ActivitiesSignaturesUserDict]
    signer: NotRequired[ActivitiesSignaturesUserDict]
    quality: NotRequired[SignatureQualityOrStr]
    legislation: NotRequired[SignatureLegislationOrStr]
