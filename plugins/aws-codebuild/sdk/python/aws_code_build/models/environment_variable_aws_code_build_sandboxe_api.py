from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type3_aws_code_build_sandboxe_api import Type3AwsCodeBuildSandboxeApiOrStr


class EnvironmentVariableAwsCodeBuildSandboxeApi(SdkBaseModel):
    name: str
    """The name or key of the environment variable."""

    value: str
    """The value of the environment variable. We strongly discourage the use of PLAINTEXT environment variables to store
    sensitive values, especially Amazon Web Services secret key IDs. PLAINTEXT environment variables can be displayed in
    plain text using the CodeBuild console and the CLI. For sensitive values, we recommend you use an environment
    variable of type PARAMETER_STORE or SECRETS_MANAGER."""

    type_: Optional[Type3AwsCodeBuildSandboxeApiOrStr] = Field(default=UNSET, alias="type")
    """The type of environment variable. Valid values include: PARAMETER_STORE: An environment variable stored in
    Systems Manager Parameter Store. For environment variables of this type, specify the name of the parameter as the
    value of the EnvironmentVariable. The parameter value will be substituted for the name at runtime. You can also
    define Parameter Store environment variables in the buildspec. To learn how to do so, see env/parameter-store in the
    CodeBuild User Guide. PLAINTEXT: An environment variable in plain text format. This is the default value.
    SECRETS_MANAGER: An environment variable sto"""


class EnvironmentVariableAwsCodeBuildSandboxeApiDict(TypedDict):
    name: str
    value: str
    type_: NotRequired[Type3AwsCodeBuildSandboxeApiOrStr]
