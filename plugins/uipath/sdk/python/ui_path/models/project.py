from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Project(SdkBaseModel):
    """A Document Understanding project containing classifiers and extractors"""

    id: Optional[str] = UNSET
    """Unique identifier of the project"""

    name: Optional[str] = UNSET
    """Display name of the project"""

    description: Optional[str] = UNSET
    """Optional description of the project's purpose"""

    extractors_url: Optional[str] = Field(default=UNSET, alias="extractorsUrl")
    """URL to retrieve the list of extractors for this project"""

    classifiers_url: Optional[str] = Field(default=UNSET, alias="classifiersUrl")
    """URL to retrieve the list of classifiers for this project"""


class ProjectDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    extractors_url: NotRequired[str]
    classifiers_url: NotRequired[str]
