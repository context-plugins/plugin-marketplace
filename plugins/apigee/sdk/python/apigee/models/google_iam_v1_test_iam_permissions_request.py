from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleIamV1TestIamPermissionsRequest(SdkBaseModel):
    """Request message for ``TestIamPermissions`` method."""

    permissions: Optional[list[str]] = UNSET
    """The set of permissions to check for the ``resource``. Permissions with wildcards (such as ``*`` or ``storage.*``)
    are not allowed. For more information see `IAM Overview
    <https://cloud.google.com/iam/docs/overview#permissions>`__."""


class GoogleIamV1TestIamPermissionsRequestDict(TypedDict):
    permissions: NotRequired[list[str]]
