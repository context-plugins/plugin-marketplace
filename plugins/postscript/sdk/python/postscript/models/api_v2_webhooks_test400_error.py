from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error_postscript_partner_identity_api import (
    ErrorPostscriptPartnerIdentityApi,
    ErrorPostscriptPartnerIdentityApiDict,
)


class ApiV2WebhooksTest400Error(SdkBaseModel):
    errors: Optional[list[ErrorPostscriptPartnerIdentityApi]] = UNSET


class ApiV2WebhooksTest400ErrorDict(TypedDict):
    errors: NotRequired[list[ErrorPostscriptPartnerIdentityApiDict]]
