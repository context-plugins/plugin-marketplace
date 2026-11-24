from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .flink_job2 import FlinkJob2, FlinkJob2Dict
from .hadoop_job1 import HadoopJob1, HadoopJob1Dict
from .hive_job1 import HiveJob1, HiveJob1Dict
from .job_scheduling1 import JobScheduling1, JobScheduling1Dict
from .pig_job2 import PigJob2, PigJob2Dict
from .presto_job1 import PrestoJob1, PrestoJob1Dict
from .py_spark_job2 import PySparkJob2, PySparkJob2Dict
from .spark_job2 import SparkJob2, SparkJob2Dict
from .spark_r_job1 import SparkRJob1, SparkRJob1Dict
from .spark_sql_job1 import SparkSqlJob1, SparkSqlJob1Dict
from .trino_job2 import TrinoJob2, TrinoJob2Dict


class OrderedJob(SdkBaseModel):
    """A job executed by the workflow."""

    pig_job: Optional[PigJob2] = Field(default=UNSET, alias="pigJob")
    """Optional. Job is a Pig job."""

    trino_job: Optional[TrinoJob2] = Field(default=UNSET, alias="trinoJob")
    """Optional. Job is a Trino job."""

    labels: Optional[dict[str, str]] = UNSET
    r"""Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must
    conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters
    long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be
    associated with a given job."""

    spark_sql_job: Optional[SparkSqlJob1] = Field(default=UNSET, alias="sparkSqlJob")
    """Optional. Job is a SparkSql job."""

    prerequisite_step_ids: Optional[list[str]] = Field(default=UNSET, alias="prerequisiteStepIds")
    """Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning
    of workflow."""

    hive_job: Optional[HiveJob1] = Field(default=UNSET, alias="hiveJob")
    """Optional. Job is a Hive job."""

    presto_job: Optional[PrestoJob1] = Field(default=UNSET, alias="prestoJob")
    """Optional. Job is a Presto job."""

    hadoop_job: Optional[HadoopJob1] = Field(default=UNSET, alias="hadoopJob")
    """Optional. Job is a Hadoop job."""

    step_id: Optional[str] = Field(default=UNSET, alias="stepId")
    """Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for
    job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must
    contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with
    underscore or hyphen. Must consist of between 3 and 50 characters."""

    flink_job: Optional[FlinkJob2] = Field(default=UNSET, alias="flinkJob")
    """Optional. Job is a Flink job."""

    scheduling: Optional[JobScheduling1] = UNSET
    """Optional. Job scheduling configuration."""

    spark_job: Optional[SparkJob2] = Field(default=UNSET, alias="sparkJob")
    """Optional. Job is a Spark job."""

    spark_r_job: Optional[SparkRJob1] = Field(default=UNSET, alias="sparkRJob")
    """Optional. Job is a SparkR job."""

    pyspark_job: Optional[PySparkJob2] = Field(default=UNSET, alias="pysparkJob")
    """Optional. Job is a PySpark job."""


class OrderedJobDict(TypedDict):
    pig_job: NotRequired[PigJob2Dict]
    trino_job: NotRequired[TrinoJob2Dict]
    labels: NotRequired[dict[str, str]]
    spark_sql_job: NotRequired[SparkSqlJob1Dict]
    prerequisite_step_ids: NotRequired[list[str]]
    hive_job: NotRequired[HiveJob1Dict]
    presto_job: NotRequired[PrestoJob1Dict]
    hadoop_job: NotRequired[HadoopJob1Dict]
    step_id: NotRequired[str]
    flink_job: NotRequired[FlinkJob2Dict]
    scheduling: NotRequired[JobScheduling1Dict]
    spark_job: NotRequired[SparkJob2Dict]
    spark_r_job: NotRequired[SparkRJob1Dict]
    pyspark_job: NotRequired[PySparkJob2Dict]
