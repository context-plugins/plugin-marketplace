from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .search import Search, SearchDict
from .supported_fields import SupportedFields, SupportedFieldsDict


class ApiV1MetaResponse(SdkBaseModel):
    version: str
    capabilities: list[str]
    supported_fields: SupportedFields
    search: Optional[Search] = UNSET
    content_types: list[str]
    sectors: Optional[list[str]] = UNSET
    rate_limit_policy: Optional[str] = UNSET
    supported_countries: Optional[list[str]] = UNSET
    supported_scopes: Optional[list[str]] = UNSET


class ApiV1MetaResponseDict(TypedDict):
    version: str
    capabilities: list[str]
    supported_fields: SupportedFieldsDict
    search: NotRequired[SearchDict]
    content_types: list[str]
    sectors: NotRequired[list[str]]
    rate_limit_policy: NotRequired[str]
    supported_countries: NotRequired[list[str]]
    supported_scopes: NotRequired[list[str]]
