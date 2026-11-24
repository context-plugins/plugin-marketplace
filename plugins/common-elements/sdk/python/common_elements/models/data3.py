from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Data3(SdkBaseModel):
    officer_title: Optional[str] = UNSET
    """Title as filed (e.g. "President", "Director")."""

    first_name: Optional[str] = UNSET
    """Officer name as filed."""

    last_name: Optional[str] = UNSET
    """Officer name as filed."""

    middle_initial: OptionalNullable[str] = UNSET
    """Additional name parts, where present."""

    suffix: OptionalNullable[str] = UNSET
    """Additional name parts, where present."""

    city: OptionalNullable[str] = UNSET
    """Location on the filing, not necessarily the officer's residence."""

    county: OptionalNullable[str] = UNSET
    """Location on the filing, not necessarily the officer's residence."""

    state: OptionalNullable[str] = UNSET
    """Location on the filing, not necessarily the officer's residence."""

    directory_source: Optional[str] = UNSET
    """The state filing source this row came from."""

    source_snapshot_label: Optional[str] = UNSET
    """Which ingested snapshot this row belongs to."""

    is_resolved: Optional[bool] = UNSET
    """Whether this filing row has been matched to a canonical person record."""


class Data3Dict(TypedDict):
    officer_title: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    middle_initial: NotRequired[str | None]
    suffix: NotRequired[str | None]
    city: NotRequired[str | None]
    county: NotRequired[str | None]
    state: NotRequired[str | None]
    directory_source: NotRequired[str]
    source_snapshot_label: NotRequired[str]
    is_resolved: NotRequired[bool]
