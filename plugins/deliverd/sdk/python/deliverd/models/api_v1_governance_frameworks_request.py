from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .requirement import Requirement, RequirementDict


class ApiV1GovernanceFrameworksRequest(SdkBaseModel):
    key: str
    """custom_ followed by lower case letters, digits and underscores"""

    version: str
    """e.g. 1.0 or 2026.10. A change to a published framework is a new version"""

    name: str
    summary: Optional[str] = UNSET
    jurisdictions: Optional[list[str]] = UNSET
    """Where it applies, e.g. EU, UK. Empty: wherever it is adopted"""

    effective_from: Optional[Date] = Field(default=UNSET, alias="effectiveFrom")
    requirements: list[Requirement]


class ApiV1GovernanceFrameworksRequestDict(TypedDict):
    key: str
    version: str
    name: str
    summary: NotRequired[str]
    jurisdictions: NotRequired[list[str]]
    effective_from: NotRequired[Date]
    requirements: list[RequirementDict]
