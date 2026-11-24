from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .dimension import Dimension, DimensionDict
from .metric_doi_t_data_hub_api import MetricDoiTDataHubApi, MetricDoiTDataHubApiDict


class Event(SdkBaseModel):
    provider: str
    """The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore (_), space, dash
    (-)."""

    id: Optional[str] = UNSET
    """The event id. Must be unique within the dataset. If not set, a UUIDv4 will be generated at ingestion time."""

    dimensions: Optional[list[Dimension]] = UNSET
    time: RFC3339DateTime
    """The timestamp of the event in RFC3339 format."""

    metrics: Optional[list[MetricDoiTDataHubApi]] = UNSET


class EventDict(TypedDict):
    provider: str
    id: NotRequired[str]
    dimensions: NotRequired[list[DimensionDict]]
    time: RFC3339DateTime
    metrics: NotRequired[list[MetricDoiTDataHubApiDict]]
