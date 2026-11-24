from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ValueUiPathOrchestratorPackagesApi(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """Package ID (name and version combined)"""

    title: Optional[str] = Field(default=UNSET, alias="Title")
    """Package display title"""

    version: Optional[str] = Field(default=UNSET, alias="Version")
    """Semantic version of the package"""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """Package description from the NuGet metadata"""

    published: Optional[RFC3339DateTime] = Field(default=UNSET, alias="Published")
    """ISO 8601 timestamp when the package was published"""


class ValueUiPathOrchestratorPackagesApiDict(TypedDict):
    id: NotRequired[str]
    title: NotRequired[str]
    version: NotRequired[str]
    description: NotRequired[str]
    published: NotRequired[RFC3339DateTime]
