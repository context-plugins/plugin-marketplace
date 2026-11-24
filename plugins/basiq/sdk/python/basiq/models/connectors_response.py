from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_platform_connectors_api import DatumPlatformConnectorsApi, DatumPlatformConnectorsApiDict
from .links1 import Links1, Links1Dict


class ConnectorsResponse(SdkBaseModel):
    """ConnectorsList contains list of connectors data."""

    type_: str = Field(alias="type")
    """Type identifies response data format"""

    total_count: int = Field(alias="totalCount")
    """TotalCount contains total count of connectors"""

    data: list[DatumPlatformConnectorsApi]
    """Data contains list of connectors"""

    links: Links1
    """ResourceLinks contains resource links"""


class ConnectorsResponseDict(TypedDict):
    type_: str
    total_count: int
    data: list[DatumPlatformConnectorsApiDict]
    links: Links1Dict
