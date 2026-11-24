from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .submitted_compose_project import SubmittedComposeProject, SubmittedComposeProjectDict
from .submitted_runtime_limits import SubmittedRuntimeLimits, SubmittedRuntimeLimitsDict
from .submitted_runtime_resources import SubmittedRuntimeResources, SubmittedRuntimeResourcesDict


class SubmittedRuntimeConfig(SdkBaseModel):
    """SDK ``RuntimeConfig`` accepted by hosted v6 submissions.

    Provider-specific support is validated by the SDK runtime implementation."""

    image: Optional[str] = UNSET
    compose: Optional[SubmittedComposeProject] = UNSET
    resources: Optional[SubmittedRuntimeResources] = UNSET
    limits: Optional[SubmittedRuntimeLimits] = UNSET


class SubmittedRuntimeConfigDict(TypedDict):
    image: NotRequired[str]
    compose: NotRequired[SubmittedComposeProjectDict]
    resources: NotRequired[SubmittedRuntimeResourcesDict]
    limits: NotRequired[SubmittedRuntimeLimitsDict]
