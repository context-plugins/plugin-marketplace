from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1(SdkBaseModel):
    """Optional. Encryption settings for encrypting workflow template job arguments."""

    kms_key: Optional[str] = Field(default=UNSET, alias="kmsKey")
    """Optional. The Cloud KMS key name to use for encrypting workflow template job arguments.When this this key is
    provided, the following workflow template job arguments
    (https://cloud.google.com/dataproc/docs/concepts/workflows/use-workflows#adding_jobs_to_a_template), if present, are
    CMEK encrypted
    (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_workflow_template_data):
    FlinkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob args
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and queryList.queries HiveJob
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob) scriptVariables and queryList.queries PigJob
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and queryList.queries PrestoJob
    (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and queryList.queries"""


class GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig1Dict(TypedDict):
    kms_key: NotRequired[str]
