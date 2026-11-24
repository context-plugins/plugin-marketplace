from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class VehicleSpecs(SdkBaseModel):
    """Normalized vehicle specifications. Field availability varies by auction source and lot."""

    body_style: OptionalNullable[str] = UNSET
    """Normalized body style used by the body_style filter. IAAI uses VehicleClass. Copart primarily uses the
    source-backed Body Style field; when that source field is missing, a conservative fallback is allowed only from
    explicit vehicle-type labels that are themselves body categories (for example Sedan, SUV, Coupe, Convertible).
    Generic AUTOMOBILE is not guessed."""


class VehicleSpecsDict(TypedDict):
    body_style: NotRequired[str | None]
