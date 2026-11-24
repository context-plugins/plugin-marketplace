from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatahubV1DatasetsResponse2(SdkBaseModel):
    message: Optional[str] = UNSET


class DatahubV1DatasetsResponse2Dict(TypedDict):
    message: NotRequired[str]
