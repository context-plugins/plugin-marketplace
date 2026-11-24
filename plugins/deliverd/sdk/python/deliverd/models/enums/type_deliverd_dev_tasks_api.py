from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDeliverdDevTasksApi(str, Enum):
    ASSESSMENT = "assessment"
    TEST_RESULT = "test_result"
    APPROVAL = "approval"
    DECISION = "decision"
    POLICY = "policy"
    RISK_ASSESSMENT = "risk_assessment"
    SECURITY_REVIEW = "security_review"
    PRIVACY_REVIEW = "privacy_review"
    DATA_ASSESSMENT = "data_assessment"
    MODEL_EVALUATION = "model_evaluation"
    HUMAN_REVIEW = "human_review"
    INCIDENT = "incident"
    MITIGATION = "mitigation"
    EXTERNAL_DOCUMENT = "external_document"
    SYSTEM_LOG = "system_log"
    EXECUTION_RECEIPT = "execution_receipt"
    RED_TEAM = "red_team"

    __str__ = str.__str__


TypeDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    TypeDeliverdDevTasksApi | str, open_enum_validator(TypeDeliverdDevTasksApi)
]
