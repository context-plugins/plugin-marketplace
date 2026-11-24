from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .signals_metadata_response_meta import SignalsMetadataResponseMeta, SignalsMetadataResponseMetaDict
from .signals_metadata_response_signals_items import (
    SignalsMetadataResponseSignalsItems,
    SignalsMetadataResponseSignalsItemsDict,
)


class SignalsMetadataResponse(SdkBaseModel):
    signals: list[SignalsMetadataResponseSignalsItems]
    meta: SignalsMetadataResponseMeta


class SignalsMetadataResponseDict(TypedDict):
    signals: list[SignalsMetadataResponseSignalsItemsDict]
    meta: SignalsMetadataResponseMetaDict
