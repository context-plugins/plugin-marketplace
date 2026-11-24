from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApigatewayTestIamPermissionsResponse(SdkBaseModel):
    """Response message for ``TestIamPermissions`` method."""

    permissions: Optional[list[str]] = UNSET
    """A subset of ``TestPermissionsRequest.permissions`` that the caller is allowed."""


class ApigatewayTestIamPermissionsResponseDict(TypedDict):
    permissions: NotRequired[list[str]]
