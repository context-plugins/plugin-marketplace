from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .service_collection import ServiceCollection, ServiceCollectionDict


class ListAnomaliesForInsightFilters(SdkBaseModel):
    service_collection: Optional[ServiceCollection] = Field(default=UNSET, alias="ServiceCollection")


class ListAnomaliesForInsightFiltersDict(TypedDict):
    service_collection: NotRequired[ServiceCollectionDict]
