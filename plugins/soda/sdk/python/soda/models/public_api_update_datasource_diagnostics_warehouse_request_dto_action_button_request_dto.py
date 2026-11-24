from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDto(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    title: Optional[str] = UNSET
    url: Optional[str] = UNSET


class PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDtoDict(TypedDict):
    enabled: NotRequired[bool]
    title: NotRequired[str]
    url: NotRequired[str]
