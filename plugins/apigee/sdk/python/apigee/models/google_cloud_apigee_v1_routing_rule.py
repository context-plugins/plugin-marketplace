from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1RoutingRule(SdkBaseModel):
    other_targets: Optional[list[str]] = Field(default=UNSET, alias="otherTargets")
    """Conflicting targets, which will be resource names specifying either deployment groups or environments."""

    receiver: Optional[str] = UNSET
    """The resource name of the proxy revision that is receiving this basepath in the following format:
    ``organizations/{org}/apis/{api}/revisions/{rev}``. This field is omitted from the IngressConfig unless the
    GetDeployedIngressConfig API is called with view=FULL."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """The unix timestamp when this rule was updated. This is updated whenever env_group_revision is updated. This field
    is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL."""

    basepath: Optional[str] = UNSET
    """URI path prefix used to route to the specified environment. May contain one or more wildcards. For example, path
    segments consisting of a single ``*`` character will match any string."""

    deployment_group: Optional[str] = Field(default=UNSET, alias="deploymentGroup")
    """Name of a deployment group in an environment bound to the environment group in the following format:
    ``organizations/{org}/environment/{env}/deploymentGroups/{group}`` Only one of environment or deployment_group will
    be set."""

    env_group_revision: Optional[str] = Field(default=UNSET, alias="envGroupRevision")
    """The env group config revision_id when this rule was added or last updated. This value is set when the rule is
    created and will only update if the the environment_id changes. It is used to determine if the runtime is up to date
    with respect to this rule. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is
    called with view=FULL."""

    environment: Optional[str] = UNSET
    """Name of an environment bound to the environment group in the following format:
    ``organizations/{org}/environments/{env}``. Only one of environment or deployment_group will be set."""


class GoogleCloudApigeeV1RoutingRuleDict(TypedDict):
    other_targets: NotRequired[list[str]]
    receiver: NotRequired[str]
    update_time: NotRequired[str]
    basepath: NotRequired[str]
    deployment_group: NotRequired[str]
    env_group_revision: NotRequired[str]
    environment: NotRequired[str]
