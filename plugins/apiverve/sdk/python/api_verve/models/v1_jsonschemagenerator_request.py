from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1JsonschemageneratorRequest(SdkBaseModel):
    json_value: str = Field(alias="json")
    """The sample JSON data to generate a schema from"""

    title: Optional[str] = UNSET
    """The title for the generated schema (default: 'Generated Schema')"""

    description: Optional[str] = UNSET
    """Optional description for the schema"""


class V1JsonschemageneratorRequestDict(TypedDict):
    json_value: str
    title: NotRequired[str]
    description: NotRequired[str]
