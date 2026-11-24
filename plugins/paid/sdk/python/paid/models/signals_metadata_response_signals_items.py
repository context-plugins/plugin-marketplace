from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .signals_metadata_response_signals_items_paths_items import (
    SignalsMetadataResponseSignalsItemsPathsItems,
    SignalsMetadataResponseSignalsItemsPathsItemsDict,
)


class SignalsMetadataResponseSignalsItems(SdkBaseModel):
    signal_name: str = Field(alias="signalName")
    paths: list[SignalsMetadataResponseSignalsItemsPathsItems]


class SignalsMetadataResponseSignalsItemsDict(TypedDict):
    signal_name: str
    paths: list[SignalsMetadataResponseSignalsItemsPathsItemsDict]
