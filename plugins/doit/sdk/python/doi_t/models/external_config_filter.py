from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dimensions_types import DimensionsTypesOrStr
from .enums.mode import ModeOrStr


class ExternalConfigFilter(SdkBaseModel):
    """To include or exclude certain values. When using allocation rules as a filter, both the type and the ID must be
    "allocation_rule", and the values array contains the allocation rule IDs. When using allocations as a filter, the
    type must be "allocation" and the ID is the actual allocation group ID."""

    id: str
    """Dimension key to filter on. Must pair with ``type`` and match a dimension returned by ``GET
    /analytics/v1/dimensions`` (for example, ``service_description`` with ``type: fixed``). For ``allocation_rule``, use
    ``allocation_rule``. For ``allocation``, use the allocation group ID. See ``DimensionsTypes`` for how each ``type``
    uses ``id``."""

    type_: DimensionsTypesOrStr = Field(alias="type")
    """Dimension filter type. Always pair ``type`` with ``id`` on scope filters. Discover valid ``id`` + ``type`` pairs
    for your account with ``GET /analytics/v1/dimensions``. ``allocation_rule`` replaces ``attribution``; ``allocation``
    replaces ``attribution_group``."""

    values: Optional[list[str]] = UNSET
    """List of values to include or exclude. Must match exact strings from your billing or DataHub data for the
    dimension (for example, ``Amazon Simple Storage Service`` for AWS S3 on ``service_description``). For
    ``allocation_rule``, use allocation rule IDs."""

    mode: Optional[ModeOrStr] = UNSET
    """Controls how the dimension’s ``values`` are matched when the alert query runs. If mode is omitted, behavior
    defaults to is."""

    inverse: Optional[bool] = UNSET
    """Set to ``true`` to exclude the set values. If inverse is omitted, behavior defaults to ``false``."""

    case_insensitive: bool = Field(default=False, alias="caseInsensitive")
    """If true, string matching is case-insensitive. Effective only for starts_with, ends_with, and contains modes;
    ignored otherwise."""

    include_null: bool = Field(default=False, alias="includeNull")
    """Include rows where the dimension is null. If includeNull is omitted, behavior defaults to ``false``."""


class ExternalConfigFilterDict(TypedDict):
    id: str
    type_: DimensionsTypesOrStr
    values: NotRequired[list[str]]
    mode: NotRequired[ModeOrStr]
    inverse: NotRequired[bool]
    case_insensitive: NotRequired[bool]
    include_null: NotRequired[bool]
