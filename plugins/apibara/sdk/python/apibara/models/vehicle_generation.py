from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class VehicleGeneration(SdkBaseModel):
    """Resolved vehicle generation metadata when the source vehicle can be matched unambiguously."""

    id: Optional[int] = UNSET
    name: Optional[str] = UNSET
    generation: Optional[str] = UNSET
    make: Optional[str] = UNSET
    model: Optional[str] = UNSET
    year_from: Optional[int] = UNSET
    year_to: OptionalNullable[int] = UNSET
    label: Optional[str] = UNSET


class VehicleGenerationDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    generation: NotRequired[str]
    make: NotRequired[str]
    model: NotRequired[str]
    year_from: NotRequired[int]
    year_to: NotRequired[int | None]
    label: NotRequired[str]
