from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.public1_doi_t_sharing_api import Public1DoiTSharingApiOrStr
from .resource_permission import ResourcePermission, ResourcePermissionDict


class SharingV1Request(SdkBaseModel):
    permissions: Optional[list[ResourcePermission]] = UNSET
    public: OptionalNullable[Public1DoiTSharingApiOrStr] = UNSET
    """The type of permissions granted to all users in the organization for this resource.

    Allocations (single and group) always have at least ``viewer`` public access, so it cannot be cleared:
    - If ``public`` is omitted, the stored value is kept.
    - An empty string (``""``) is accepted for backward compatibility and is treated as ``viewer``.
    - An explicit ``null`` is rejected with ``400 Bad Request``.

    For Reports, Budgets, and Alerts, an omitted or ``null`` value sets ``public`` to ``null`` (no public access)."""


class SharingV1RequestDict(TypedDict):
    permissions: NotRequired[list[ResourcePermissionDict]]
    public: NotRequired[Public1DoiTSharingApiOrStr | None]
