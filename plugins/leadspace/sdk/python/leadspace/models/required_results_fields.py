from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RequiredResultsFields(SdkBaseModel):
    direct_phone: Optional[bool] = Field(default=UNSET, alias="directPhone")
    company_phone: Optional[bool] = Field(default=UNSET, alias="companyPhone")
    verified_email: Optional[bool] = Field(default=UNSET, alias="verifiedEmail")


class RequiredResultsFieldsDict(TypedDict):
    direct_phone: NotRequired[bool]
    company_phone: NotRequired[bool]
    verified_email: NotRequired[bool]
