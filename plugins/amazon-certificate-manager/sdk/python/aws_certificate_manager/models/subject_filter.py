from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .common_name_filter import CommonNameFilter, CommonNameFilterDict


class SubjectFilter(SdkBaseModel):
    """Exactly one member is set."""

    common_name: Optional[CommonNameFilter] = Field(default=UNSET, alias="CommonName")


class SubjectFilterDict(TypedDict):
    common_name: NotRequired[CommonNameFilterDict]
