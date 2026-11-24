from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict


class HadoopJob1(SdkBaseModel):
    """Optional. Job is a Hadoop job."""

    main_jar_file_uri: Optional[str] = Field(default=UNSET, alias="mainJarFileUri")
    """The HCFS URI of the jar file containing the main class. Examples:
    'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar'
    'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'"""

    file_uris: Optional[list[str]] = Field(default=UNSET, alias="fileUris")
    """Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop
    drivers and distributed tasks. Useful for naively parallel tasks."""

    main_class: Optional[str] = Field(default=UNSET, alias="mainClass")
    """The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or
    specified in jar_file_uris."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. The runtime log config for job execution."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks."""

    archive_uris: Optional[list[str]] = Field(default=UNSET, alias="archiveUris")
    """Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported
    file types: .jar, .tar, .tar.gz, .tgz, or .zip."""

    args: Optional[list[str]] = UNSET
    """Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can
    be set as job properties, since a collision might occur that causes an incorrect job submission."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values
    set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in
    user code."""


class HadoopJob1Dict(TypedDict):
    main_jar_file_uri: NotRequired[str]
    file_uris: NotRequired[list[str]]
    main_class: NotRequired[str]
    logging_config: NotRequired[LoggingConfig1Dict]
    jar_file_uris: NotRequired[list[str]]
    archive_uris: NotRequired[list[str]]
    args: NotRequired[list[str]]
    properties: NotRequired[dict[str, str]]
