from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dimensions_types import DimensionsTypesOrStr
from .external_api_get_value import ExternalApiGetValue, ExternalApiGetValueDict


class DimensionsExternalApiGetResponse(SdkBaseModel):
    """Dimension metadata returned by the API."""

    id: Optional[str] = UNSET
    label: Optional[str] = UNSET
    type_: Optional[DimensionsTypesOrStr] = Field(default=UNSET, alias="type")
    """Dimension filter type. Always pair ``type`` with ``id`` on scope filters. Discover valid ``id`` + ``type`` pairs
    for your account with ``GET /analytics/v1/dimensions``. ``allocation_rule`` replaces ``attribution``; ``allocation``
    replaces ``attribution_group``."""

    values: Optional[list[ExternalApiGetValue]] = UNSET


class DimensionsExternalApiGetResponseDict(TypedDict):
    id: NotRequired[str]
    label: NotRequired[str]
    type_: NotRequired[DimensionsTypesOrStr]
    values: NotRequired[list[ExternalApiGetValueDict]]
