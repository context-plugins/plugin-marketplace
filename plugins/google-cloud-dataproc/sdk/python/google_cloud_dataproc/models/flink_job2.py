from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict


class FlinkJob2(SdkBaseModel):
    """Optional. Job is a Flink job."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. The runtime log config for job execution."""

    main_class: Optional[str] = Field(default=UNSET, alias="mainClass")
    """The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or
    specified in jarFileUris."""

    main_jar_file_uri: Optional[str] = Field(default=UNSET, alias="mainJarFileUri")
    """The HCFS URI of the jar file that contains the main class."""

    savepoint_uri: Optional[str] = Field(default=UNSET, alias="savepointUri")
    """Optional. HCFS URI of the savepoint, which contains the last saved progress for starting the current job."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Flink driver and tasks."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values, used to configure Flink. Properties that conflict with values
    set by the Dataproc API might be overwritten. Can include properties set in /etc/flink/conf/flink-defaults.conf and
    classes in user code."""

    args: Optional[list[str]] = UNSET
    """Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job
    properties, since a collision might occur that causes an incorrect job submission."""


class FlinkJob2Dict(TypedDict):
    logging_config: NotRequired[LoggingConfig1Dict]
    main_class: NotRequired[str]
    main_jar_file_uri: NotRequired[str]
    savepoint_uri: NotRequired[str]
    jar_file_uris: NotRequired[list[str]]
    properties: NotRequired[dict[str, str]]
    args: NotRequired[list[str]]
