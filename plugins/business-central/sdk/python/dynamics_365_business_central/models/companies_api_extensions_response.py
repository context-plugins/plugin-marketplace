from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .extension import Extension, ExtensionDict


class CompaniesApiExtensionsResponse(SdkBaseModel):
    value: Optional[list[Extension]] = UNSET


class CompaniesApiExtensionsResponseDict(TypedDict):
    value: NotRequired[list[ExtensionDict]]
