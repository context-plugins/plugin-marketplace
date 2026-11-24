from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .custom_view_query import CustomViewQuery, CustomViewQueryDict
from .render_bundle_edit import RenderBundleEdit, RenderBundleEditDict


class UpdateCustomViewRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """New human-readable view name."""

    description: OptionalNullable[str] = UNSET
    """New description; pass null to clear it."""

    queries: Optional[list[CustomViewQuery]] = UNSET
    """Full replacement of the view's query list. Each SQL is re-validated (SELECT-only) exactly like createCustomView.
    For changing one or two queries, prefer ``queryUpserts``/``queryRemovals`` instead. Cannot be combined with them."""

    render_bundle: Optional[str] = Field(default=UNSET, alias="renderBundle")
    """Replacement render bundle. Re-validated (size cap, self-contained, paid:data listener) exactly like
    createCustomView. For small changes, prefer ``bundleEdits`` instead. Cannot be combined with ``bundleEdits``."""

    bundle_edits: Optional[list[RenderBundleEdit]] = Field(default=UNSET, alias="bundleEdits")
    """PREFERRED for revisions: exact search-and-replace edits applied in order to the stored render bundle, so you send
    only the changed text instead of re-transmitting the whole bundle. The edited result passes the same validation as a
    full replacement. Cannot be combined with ``renderBundle``."""

    query_upserts: Optional[list[CustomViewQuery]] = Field(default=UNSET, alias="queryUpserts")
    """PREFERRED for revisions: per-query changes — each entry replaces the stored query with the same id, or is
    appended as a new query. Queries not mentioned are left unchanged. Cannot be combined with ``queries``."""

    query_removals: Optional[list[str]] = Field(default=UNSET, alias="queryRemovals")
    """Ids of stored queries to remove (applied before ``queryUpserts``). Rejected if an id does not exist. Cannot be
    combined with ``queries``."""


class UpdateCustomViewRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str | None]
    queries: NotRequired[list[CustomViewQueryDict]]
    render_bundle: NotRequired[str]
    bundle_edits: NotRequired[list[RenderBundleEditDict]]
    query_upserts: NotRequired[list[CustomViewQueryDict]]
    query_removals: NotRequired[list[str]]
