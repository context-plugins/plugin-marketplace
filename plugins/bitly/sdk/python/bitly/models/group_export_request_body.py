from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.export_type import ExportTypeOrStr
from .group_export_filter import GroupExportFilter, GroupExportFilterDict


class GroupExportRequestBody(SdkBaseModel):
    export_type: ExportTypeOrStr
    """Which export shape to produce."""

    bitlinks: Optional[list[str]] = UNSET
    """Fully qualified bitlinks (e.g. "bit.ly/abc"). Used by export_type link_engagements_batch when the caller already
    knows the exact links. Mutually exclusive with filter (provide one or the other)."""

    unix_from: Optional[int] = UNSET
    """Start of the metrics date range (Unix seconds, UTC). Clamped to the caller's tier data window. For
    link_engagements_batch, required together with unix_to unless the tier max-history default applies. For links_list
    or qr_codes_list, used when include_metrics is true."""

    unix_to: Optional[int] = UNSET
    """End of the metrics date range (Unix seconds, UTC). See unix_from."""

    filter: Optional[GroupExportFilter] = UNSET
    """Search constraints used to resolve links or QR codes for export. Required for links_list and qr_codes_list."""

    include_metrics: Optional[bool] = UNSET
    """When true on links_list or qr_codes_list, append clicks, scans, and button_clicks columns and apply the 200-row
    cap. Requires unix_from and unix_to (or tier-default window behavior where applicable)."""


class GroupExportRequestBodyDict(TypedDict):
    export_type: ExportTypeOrStr
    bitlinks: NotRequired[list[str]]
    unix_from: NotRequired[int]
    unix_to: NotRequired[int]
    filter: NotRequired[GroupExportFilterDict]
    include_metrics: NotRequired[bool]
