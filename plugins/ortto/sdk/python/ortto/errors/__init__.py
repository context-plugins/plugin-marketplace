from .create_activities_error import CreateActivitiesErrorBody, create_activities_error_mapper
from .delete_people_error import DeletePeopleErrorBody, delete_people_error_mapper
from .get_campaign_calendar_error import GetCampaignCalendarErrorBody, get_campaign_calendar_error_mapper
from .get_campaign_report_error import GetCampaignReportErrorBody, get_campaign_report_error_mapper
from .get_people_by_ids_error import GetPeopleByIdsErrorBody, get_people_by_ids_error_mapper
from .get_people_error import GetPeopleErrorBody, get_people_error_mapper
from .get_tags_error import GetTagsErrorBody, get_tags_error_mapper
from .merge_accounts_error import MergeAccountsErrorBody, merge_accounts_error_mapper
from .merge_people_error import MergePeopleErrorBody, merge_people_error_mapper
from .send_transactional_email_error import SendTransactionalEmailErrorBody, send_transactional_email_error_mapper
from .send_transactional_sms_error import SendTransactionalSmsErrorBody, send_transactional_sms_error_mapper

__all__ = [
    "CreateActivitiesErrorBody",
    "DeletePeopleErrorBody",
    "GetCampaignCalendarErrorBody",
    "GetCampaignReportErrorBody",
    "GetPeopleByIdsErrorBody",
    "GetPeopleErrorBody",
    "GetTagsErrorBody",
    "MergeAccountsErrorBody",
    "MergePeopleErrorBody",
    "SendTransactionalEmailErrorBody",
    "SendTransactionalSmsErrorBody",
    "create_activities_error_mapper",
    "delete_people_error_mapper",
    "get_campaign_calendar_error_mapper",
    "get_campaign_report_error_mapper",
    "get_people_by_ids_error_mapper",
    "get_people_error_mapper",
    "get_tags_error_mapper",
    "merge_accounts_error_mapper",
    "merge_people_error_mapper",
    "send_transactional_email_error_mapper",
    "send_transactional_sms_error_mapper",
]
