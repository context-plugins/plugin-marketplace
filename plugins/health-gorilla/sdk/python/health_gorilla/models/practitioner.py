from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Practitioner(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    id: Optional[str] = UNSET
    identifier: Optional[list[Any]] = UNSET
    name: Optional[list[Any]] = UNSET


class PractitionerDict(TypedDict):
    resource_type: NotRequired[str]
    id: NotRequired[str]
    identifier: NotRequired[list[Any]]
    name: NotRequired[list[Any]]
