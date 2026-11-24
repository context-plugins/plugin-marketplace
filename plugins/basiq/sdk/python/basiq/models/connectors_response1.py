from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .authorization import Authorization, AuthorizationDict
from .enums.method import MethodOrStr
from .institution import Institution, InstitutionDict
from .links1 import Links1, Links1Dict
from .stats import Stats, StatsDict


class ConnectorsResponse1(SdkBaseModel):
    """Connector contains connector data."""

    type_: Literal["connector"] = Field(default="connector", alias="type")
    """Resource type identifier. It is always "connector" for this model. connector ConnectorEntityType"""

    id: str
    """Institution ID"""

    method: MethodOrStr
    """Current Connector method"""

    stage: str
    """Current Connector stage"""

    status: str
    """FeatureCondition type that describes an feature status for institution"""

    institution: Institution
    """ConnectorInstitutionResource connector Institution resource type"""

    scopes: list[str]
    """Connector scopes array"""

    authorization: Authorization
    stats: Stats
    """InstitutionPerformanceStats response type for institution performance stats"""

    links: Optional[Links1] = UNSET
    """ResourceLinks contains resource links"""


class ConnectorsResponse1Dict(TypedDict):
    type_: Literal["connector"]
    id: str
    method: MethodOrStr
    stage: str
    status: str
    institution: InstitutionDict
    scopes: list[str]
    authorization: AuthorizationDict
    stats: StatsDict
    links: NotRequired[Links1Dict]
