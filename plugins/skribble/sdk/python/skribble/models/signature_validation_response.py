from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .optional_validation_infos1 import OptionalValidationInfos1, OptionalValidationInfos1Dict


class SignatureValidationResponse(SdkBaseModel):
    id: Optional[UUID] = UNSET
    valid: Optional[bool] = UNSET
    signatures: Optional[int] = UNSET
    """Number of signatures found"""

    valid_signatures: Optional[int] = Field(default=UNSET, alias="validSignatures")
    """Number of valid signatures found"""

    quality: Optional[str] = UNSET
    """Highest signature quality found"""

    legislation: Optional[str] = UNSET
    """Identified legislation (CH, EU, CH-EU, WORLD)"""

    long_term_validation: Optional[bool] = Field(default=UNSET, alias="longTermValidation")
    """All signatures are provided with long-term validation information"""

    additional_infos: Optional[OptionalValidationInfos1] = Field(default=UNSET, alias="additionalInfos")
    """(Optional) Additional information details"""


class SignatureValidationResponseDict(TypedDict):
    id: NotRequired[UUID]
    valid: NotRequired[bool]
    signatures: NotRequired[int]
    valid_signatures: NotRequired[int]
    quality: NotRequired[str]
    legislation: NotRequired[str]
    long_term_validation: NotRequired[bool]
    additional_infos: NotRequired[OptionalValidationInfos1Dict]
