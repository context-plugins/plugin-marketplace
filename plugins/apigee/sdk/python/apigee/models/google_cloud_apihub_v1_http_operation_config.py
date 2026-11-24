from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.method1 import Method1OrStr


class GoogleCloudApihubV1HttpOperationConfig(SdkBaseModel):
    """Identifies a single API Hub operation by spec resource name + HTTP path + HTTP method."""

    spec: Optional[str] = UNSET
    """Required. Spec resource name:
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}``"""

    path: Optional[str] = UNSET
    """Required. HTTP path of the operation within the referenced spec. Match is exact (no template substitution): the
    path here must appear verbatim on an APIOperationRevision belonging to the spec."""

    method: Optional[Method1OrStr] = UNSET
    """Required. HTTP method of the operation within the referenced spec. (GET / PUT / POST / DELETE / OPTIONS / HEAD /
    PATCH / TRACE)."""


class GoogleCloudApihubV1HttpOperationConfigDict(TypedDict):
    spec: NotRequired[str]
    path: NotRequired[str]
    method: NotRequired[Method1OrStr]
