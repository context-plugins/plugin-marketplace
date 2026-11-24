from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .compass_create_alert_event_input_dto import CompassCreateAlertEventInputDto, CompassCreateAlertEventInputDtoDict
from .compass_create_build_event_input_dto import CompassCreateBuildEventInputDto, CompassCreateBuildEventInputDtoDict
from .compass_create_custom_event_input_dto import (
    CompassCreateCustomEventInputDto,
    CompassCreateCustomEventInputDtoDict,
)
from .compass_create_deployment_event_input_dto import (
    CompassCreateDeploymentEventInputDto,
    CompassCreateDeploymentEventInputDtoDict,
)
from .compass_create_flag_event_input_dto import CompassCreateFlagEventInputDto, CompassCreateFlagEventInputDtoDict
from .compass_create_incident_event_input_dto import (
    CompassCreateIncidentEventInputDto,
    CompassCreateIncidentEventInputDtoDict,
)
from .compass_create_lifecycle_event_input_dto import (
    CompassCreateLifecycleEventInputDto,
    CompassCreateLifecycleEventInputDtoDict,
)
from .compass_create_pull_request_event_input_dto import (
    CompassCreatePullRequestEventInputDto,
    CompassCreatePullRequestEventInputDtoDict,
)
from .compass_create_push_event_input_dto import CompassCreatePushEventInputDto, CompassCreatePushEventInputDtoDict
from .compass_create_vulnerability_event_input_dto import (
    CompassCreateVulnerabilityEventInputDto,
    CompassCreateVulnerabilityEventInputDtoDict,
)


class CompassEventInputDto(SdkBaseModel):
    """The type of event. One and only one of the fields in this input type must be provided."""

    deployment: OptionalNullable[CompassCreateDeploymentEventInputDto] = UNSET
    build: OptionalNullable[CompassCreateBuildEventInputDto] = UNSET
    incident: OptionalNullable[CompassCreateIncidentEventInputDto] = UNSET
    flag: OptionalNullable[CompassCreateFlagEventInputDto] = UNSET
    alert: OptionalNullable[CompassCreateAlertEventInputDto] = UNSET
    lifecycle: OptionalNullable[CompassCreateLifecycleEventInputDto] = UNSET
    custom: OptionalNullable[CompassCreateCustomEventInputDto] = UNSET
    push: OptionalNullable[CompassCreatePushEventInputDto] = UNSET
    pull_request: OptionalNullable[CompassCreatePullRequestEventInputDto] = Field(default=UNSET, alias="pullRequest")
    vulnerability: OptionalNullable[CompassCreateVulnerabilityEventInputDto] = UNSET


class CompassEventInputDtoDict(TypedDict):
    deployment: NotRequired[CompassCreateDeploymentEventInputDtoDict | None]
    build: NotRequired[CompassCreateBuildEventInputDtoDict | None]
    incident: NotRequired[CompassCreateIncidentEventInputDtoDict | None]
    flag: NotRequired[CompassCreateFlagEventInputDtoDict | None]
    alert: NotRequired[CompassCreateAlertEventInputDtoDict | None]
    lifecycle: NotRequired[CompassCreateLifecycleEventInputDtoDict | None]
    custom: NotRequired[CompassCreateCustomEventInputDtoDict | None]
    push: NotRequired[CompassCreatePushEventInputDtoDict | None]
    pull_request: NotRequired[CompassCreatePullRequestEventInputDtoDict | None]
    vulnerability: NotRequired[CompassCreateVulnerabilityEventInputDtoDict | None]
