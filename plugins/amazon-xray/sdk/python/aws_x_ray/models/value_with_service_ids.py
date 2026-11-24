from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .annotation_value import AnnotationValue, AnnotationValueDict
from .service_id import ServiceId, ServiceIdDict


class ValueWithServiceIds(SdkBaseModel):
    annotation_value: Optional[AnnotationValue] = Field(default=UNSET, alias="AnnotationValue")
    """Exactly one member is set."""

    service_ids: Optional[list[ServiceId]] = Field(default=UNSET, alias="ServiceIds")
    """Services to which the annotation applies."""


class ValueWithServiceIdsDict(TypedDict):
    annotation_value: NotRequired[AnnotationValueDict]
    service_ids: NotRequired[list[ServiceIdDict]]
