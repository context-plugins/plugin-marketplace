from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DatahubV1DatasetsResponse3(SdkBaseModel):
    message: str


class DatahubV1DatasetsResponse3Dict(TypedDict):
    message: str
