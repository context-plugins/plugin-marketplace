from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_bundle_social_misc_api import TypeBundleSocialMiscApiOrStr
from .error_bundle_social_misc_api import ErrorBundleSocialMiscApi, ErrorBundleSocialMiscApiDict
from .granular_scope import GranularScope, GranularScopeDict


class ApiV1MiscFacebookTokenDebugResponse(SdkBaseModel):
    type_: Optional[TypeBundleSocialMiscApiOrStr] = Field(default=UNSET, alias="type")
    application: Optional[str] = UNSET
    data_access_expires_at: Optional[float] = UNSET
    is_valid: bool
    issued_at: Optional[float] = UNSET
    scopes: list[str]
    granular_scopes: list[GranularScope]
    error: Optional[ErrorBundleSocialMiscApi] = UNSET


class ApiV1MiscFacebookTokenDebugResponseDict(TypedDict):
    type_: NotRequired[TypeBundleSocialMiscApiOrStr]
    application: NotRequired[str]
    data_access_expires_at: NotRequired[float]
    is_valid: bool
    issued_at: NotRequired[float]
    scopes: list[str]
    granular_scopes: list[GranularScopeDict]
    error: NotRequired[ErrorBundleSocialMiscApiDict]
